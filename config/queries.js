// Here is where the used queries will reside.

// Queries.
const getPractice = "select * from oefenen order by id desc"
const getProjects = "select * from projecten order by id desc"

module.exports = {
	getPractice: getPractice,
	getProjects: getProjects,
}