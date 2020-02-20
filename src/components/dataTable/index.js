import React from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';

function DataTable(props) {
  const { data, keyField, columns } = props;

  return (<BootstrapTable
    keyField={keyField}
    data={data}
    columns={columns}
  />);
}

DataTable.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array.isRequired,
  keyField: PropTypes.string.isRequired,
};
DataTable.defaultProps = {
  data: [],
};

export default DataTable;
