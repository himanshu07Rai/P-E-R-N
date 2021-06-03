### Primary keys

A primary key is a column or a set of columns in a table whose values uniquely identify a row in the table. A relational database is designed to enforce the uniqueness of primary keys by allowing only one row with a given primary key value in a table.

### Foreign keys

A foreign key is a column or a set of columns in a table whose values correspond to the values of the primary key in another table. In order to add a row with a given foreign key value, there must exist a row in the related table with the same primary key value.

### Surrogate keys

Surrogate keys join the dimension tables to the fact table. Surrogate keys serve as an important means of identifying each instance or entity inside of a dimension table.

### JOIN OPERATOR

The JOIN operator specifies how to relate tables in the query.
The following join types of join are available in most relational databases:

            INNER

            OUTER (LEFT. RIGHT, FULL)

            CROSS

INNER JOIN : Select only those rows that have values in common in the columns specified in the ON clause.

LEFT, RIGHT, or FULL OUTER JOIN : Select all rows from the table on the left (or right, or both) regardless of whether the other table has values in common and (usually) enter NULL where data is missing. (Note: FULL OUTER JOIN not implemented in Access.)

CROSS JOIN : Select all possible combinations of rows and columns from both tables (Cartesian product). Not available in Access but can "happen" by not specifying relationships between tables or not setting up the appropriate joins in a query. (Not A Good Thing - the query may run for a very long time and produce a huge, not very useful result set.)

- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

  =>create extension for uuid function to work
