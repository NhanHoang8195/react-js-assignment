import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { COLUMNS } from '../../constants';
import { DataTable } from '../../components';
import * as actions from './actions';
import './stytes.scss';


function Home(props) {
  const { data } = props;

  useEffect(() => {
    props.actions.getTrips();
  }, [props.actions]);

  /**
   * Function that handle click event on row. Should navigate to new page.
   * @param e Class
   * @param {object} row data of row
   * @param {number} row.trip_id id of trip.
   */
  function onClickRow(e, row) {
    props.history.push(`/trip/${row.trip_id}`);
  }
  return (
    <div className="home-container container-fluid">
      <div>
        <h1>Trips</h1>
        <select>
          <option>aaaa</option>
        </select>
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