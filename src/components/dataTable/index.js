import React from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

import './styles.scss';

const PAGINATION_OPTIONS = {

};

function DataTable(props) {
  const { data, keyField, columns, rowEvents } = props;

  return (<div className="data-table">
    <BootstrapTable
      classes="data-bootstrap-table"
      keyField={keyField}
      data={data}
      columns={columns}
      rowEvents={rowEvents}
      noDataIndication={() => "NO DATA"}
      rowClasses="custom-row-class"
      headerClasses="custom-header-class"
      pagination={paginationFactory()}
    />
  </div>);
}

DataTable.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array.isRequired,
  keyField: PropTypes.string.isRequired,
  rowEvents: PropTypes.object,
};
DataTable.defaultProps = {
  data: [],
};

export default DataTable;
