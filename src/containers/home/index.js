import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { COLUMNS } from '../../constants';
import { DataTable, Select } from '../../components';
import * as actions from './actions';
import './stytes.scss';

const OPTIONS = [
  { label: 'Case 1 - Two', value: 'case1-two' },
  { label: 'Case 2 - Empty', value: 'case2-empty' },
  { label: 'Case 3 - Big', value: 'case3-big' },
];


function Home(props) {
  const { data } = props;

  const [valueSelect, setValueSelect] = useState(OPTIONS[0].value);

  useEffect(() => {
    props.actions.getTrips(valueSelect);
  }, [valueSelect]);

  /**
   * Function that handle click event on row. Should navigate to new page.
   * @param e Class
   * @param {object} row data of row
   * @param {number} row.trip_id id of trip.
   */
  function onClickRow(e, row) {
    props.history.push(`/trip/${row.trip_id}`);
  }
  function onChangeSelect(e) {
    setValueSelect(e.target.value);
  }
  return (
    <div className="home-container container-fluid">
      <div className="home-body">
        <h1 className="text-title">Trips</h1>
        <Select
          className="home-select"
          options={OPTIONS}
          value={valueSelect}
          onChange={onChangeSelect}
        />
        <DataTable
          columns={COLUMNS.TRIPS_TABLE}
          data={data}
          keyField='trip_id'
          rowEvents={{ onClick: onClickRow }}
        />
      </div>
    </div>);
}
Home.propTypes = {
  actions: PropTypes.shape({
    getTrips: PropTypes.func.isRequired,
  }).isRequired,
  data: PropTypes.array,
  isLoadingData: PropTypes.bool,
};
Home.defaultProps = {
  data: [],
  isLoadingData: false,
};

const mapStateToProps = state => ({
  data: state.homeReducer.get('tripData'),
  isLoadingData: state.homeReducer.get('isLoadingData'),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);