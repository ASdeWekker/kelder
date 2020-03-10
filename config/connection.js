// Connect to the database server.

// Connection URI.
const connStr = `postgresql://${process.env.PSQLU}:${process.env.PSQLW}@piet.local:${process.env.PSQLPORT}/dekelder`

module.exports = {
	connectionString: connStr,
}