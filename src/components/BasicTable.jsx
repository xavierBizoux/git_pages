import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
const BasicTable = (props) => {
    const { rows, columns } = props
    return (
        <TableContainer component={Paper}>
            <Table
                sx={{ minWidth: 650 }}
                aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        {columns.map((column, id) => {
                            return <TableCell key={id}>{column.label}</TableCell>
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, id) => (
                        <TableRow
                            key={id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            {row.map((cell, id) => {
                                return (
                                    <TableCell
                                        align='left'
                                        key={id}>
                                        {cell}
                                    </TableCell>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default BasicTable
