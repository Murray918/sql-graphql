const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const PORT = 4000

const models = require('./models')

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
	type User {
		"this is the basic user model"
		id: ID!
		firstName: String
		lastName: String
		email: String
		hobbies: [Hobby]
		externalId: String
	}

	type Hobby {
		id: ID!
		name: String!
	}

	type Query {
		hello: String
		users: [User]
		hobbies: [Hobby]
		user(id: ID): User
	}

	#add user hobby
	input CreateUserHobby {
		userId: Int!
		hobbyId: Int!
	}

	type CreateUserHobbyPayload {
		userHobby: User
		success: Boolean!
		error: String
	}

	#add user
	input CreateUser {
		firstName: String
		lastName: String
		email: String!
	}

	type CreateUserPayload {
		user: User
		success: Boolean!
		error: String
	}

	#add hobby
	input CreateHobby {
		name: String
	}

	type CreateHobbyPayload {
		hobby: Hobby
		success: Boolean!
		error: String
	}

	#remove hobby
	input DeleteUserHobby {
		id: ID!
	}

	type DeleteUserHobbyPayload {
		hobbyMessage: String
		success: Boolean!
		error: String
	}

	#update hobby
	input UpdateHobby {
		id: ID!
		name: String
	}

	type UpdateHobbyPayload {
		hobby: Hobby
		success: Boolean!
		error: String
	}

	#mutations
	type Mutation {
		createUser(input: CreateUser): CreateUserPayload
		createUserHobby(input: CreateUserHobby): CreateUserHobbyPayload
		createHobby(input: CreateHobby): CreateHobbyPayload
		deleteUserHobby(input: DeleteUserHobby): DeleteUserHobbyPayload
		updateHobby(input: UpdateHobby): UpdateHobbyPayload
	}
`

async function createUsersHobbies(_, { input }) {
	try {
		const { userId, hobbyId } = input

		const user = await models.User.findByPk(userId.toString())

		const hobby = await models.Hobby.findByPk(hobbyId.toString())

		const usersHobby = await models.UsersHobbies.create({
			userId: user.id,
			hobbyId: hobby.id
		})

		return {
			userHobby: user,
			success: true,
			error: null
		}
	} catch (error) {
		return {
			user: null,
			success: false,
			error
		}
	}
}

const findUsersHobbies = async parent => {
	try {
		const { id } = parent

		const usersHobbiesToFind = await models.UsersHobbies.findAll({
			where: { userId: id }
		})

		const hobbyIds = usersHobbiesToFind.map(result => {
			return result.hobbyId
		})

		const usersHobbies = await models.Hobby.findAll({
			where: { id: hobbyIds }
		})

		return usersHobbies
	} catch (error) {
		return error.message
	}
}

const getAllUsers = async () => {
	try {
		return await models.User.findAll()
	} catch (error) {
		return error.message
	}
}
const getAllHobbies = async () => {
	try {
		return await models.Hobby.findAll()
	} catch (error) {
		return error.message
	}
}

const getUser = async (_, { id }) => {
	try {
		return await models.User.findByPk(id.toString())
	} catch (error) {
		return error.message
	}
}

const createUser = async (_, { input }) => {
	try {
		const newUser = await models.User.create({
			...input
		})

		return {
			user: newUser,
			success: true,
			error: null
		}
	} catch (error) {
		return {
			user: null,
			success: false,
			error: error.message
		}
	}
}

const createHobby = async (_, { input }) => {
	try {
		const hobby = await models.Hobby.create({
			...input
		})
		return {
			hobby,
			success: true,
			error: null
		}
	} catch (error) {
		return {
			hobby: null,
			success: false,
			error: error.message
		}
	}
}

const destroyUserHobby = async (_, { input }) => {
	try {
		// do not let destroy get called with nothing
		if (!input) throw new Error('Invalid Query Input')

		//find hobby for the message
		const userHobbyToDelete = await models.UsersHobbies.findByPk(
			input.id.toString()
		)

		//do not run for no hobby found
		if (userHobbyToDelete === null) throw new Error('No Hobby Found')

		console.log(1111, userHobbyToDelete)
		const { id, userId } = userHobbyToDelete

		//delete the hobby
		const hobby = await models.UsersHobbies.destroy({
			where: { id: userHobbyToDelete.id }
		})

		//successful hobby delete message
		const hobbyMessage = `Deleted UserHobby with Id ${id} from user ${userId}`

		return {
			hobbyMessage: hobbyMessage,
			success: true,
			error: null
		}
	} catch (error) {
		return {
			hobby: null,
			success: false,
			error: error.message
		}
	}
}

const updateHobby = async (_, { input }) => {
	try {
		const { id, name } = input
		console.log(input)
		const hobby = await models.Hobby.findByPk(id.toString())
		hobby.name = name

		const result = await hobby.save()
		console.log(result)
		return {
			hobby,
			success: true,
			error: null
		}
	} catch (error) {
		return {
			hobby: null,
			success: false,
			error: error.message
		}
	}
}

const Query = {
	users: getAllUsers,
	hobbies: getAllHobbies,
	user: getUser
}

const Mutation = {
	createUserHobby: createUsersHobbies,
	createUser: createUser,
	createHobby: createHobby,
	deleteUserHobby: destroyUserHobby,
	updateHobby: updateHobby
}
// Provide resolver functions for your schema fields
const resolvers = {
	Query,
	Mutation,
	User: {
		hobbies: findUsersHobbies
	}
}

// instantiate express server
const app = express()

//instantiate Apollo server
const server = new ApolloServer({ typeDefs, resolvers })

//apply the middleware to the express app
server.applyMiddleware({ app })

//authenticate and synchronize the database
models.sequelize.authenticate()

app.listen({ port: PORT }, () => {
	console.log(`listening at URL http://localhost:${PORT}${server.graphqlPath}`)
})
