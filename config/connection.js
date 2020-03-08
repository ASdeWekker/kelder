// Connect to the database server.

// Connection URI.
module.exports = {
	connectionString: `
		postgresql://
		${process.env.PSQLU}:
		${process.env.PSQLW}@
		${process.env.PSQLIP}:
		${process.env.PSQLPORT}/dekelder
	`,
}