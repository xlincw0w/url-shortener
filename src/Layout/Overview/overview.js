import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import dayjs from 'dayjs'
import { constants } from '../../constants'

import axios from 'axios'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
})

export default function Overview() {
    const classes = useStyles()
    const [urls, SetUrls] = useState([])

    useEffect(() => {
        axios
            .get(constants.url + '/urls')
            .then((res) => {
                SetUrls(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div className='lg:px-10 xl:px-32'>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Resolved URL</TableCell>
                            <TableCell align='right'>Shortened URL</TableCell>
                            <TableCell align='right'>Creation date</TableCell>
                            <TableCell align='right'>Times requested</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {urls.map((row) => {
                            return (
                                <TableRow key={row.id_url}>
                                    <TableCell component='th' scope='row'>
                                        <a href={row.long_url} target='_blank'>
                                            {row.long_url}
                                        </a>
                                    </TableCell>
                                    <TableCell align='right'>{row.short_url}</TableCell>
                                    <TableCell align='right'>{dayjs(row.createdat).format('HH:mm DD-MM-YYYY')}</TableCell>
                                    <TableCell align='right'>{row.accessed}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
