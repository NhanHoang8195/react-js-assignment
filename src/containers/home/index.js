import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { COLUMNS } from '../../constants';
import { DataTable } from '../../components';
import * as actions from './actions';


function Home(props) {
  const { data } = props;

  useEffect(() => {
    props.actions.getTrips();
  }, [props.actions]);
  return (<div>
    <DataTable
      columns={COLUMNS.TRIPS_TABLE}
      data={data}
      keyField='trip_id'
    />
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