// @ts-nocheck
import React from 'react';
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableExpandHeader,
  TableHeader,
  TableRow,
  TableBody,
  TableExpandRow,
  TableExpandedRow,
  TableCell,
} from 'carbon-components-react';

const RepoTable = ({ headers, rows }) => {
  return (
    <DataTable
      headers={headers}
      rows={rows}
      render={({
        headers,
        rows,
        getTableProps,
        getHeaderProps,
        getRowProps,
      }) => (
        <TableContainer
          title="Carbon repositories."
          description="A collection of public Carbon repositories.">
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                <TableExpandHeader />
                {headers.map(header => (
                  <TableHeader {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map(row => (
                <React.Fragment key={row.id}>
                  <TableExpandRow {...getRowProps({ row })}>
                    {row.cells.map(cell => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableExpandRow>
                  <TableExpandedRow colSpan={headers.length + 1}>
                    <p>description</p>
                  </TableExpandedRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    />
  );
};

export default RepoTable;
