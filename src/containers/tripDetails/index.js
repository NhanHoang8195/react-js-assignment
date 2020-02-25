import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import FormTrip from './formTrip';
import './styles.scss';

function TripDetails(props) {
  const { tripDetails, isLoading } = props;
  const tripId = props.match.params.id;
  useEffect(() => {
    props.actions.getTripDetails(tripId);
  }, [props.actions, tripId]);
  if (isLoading) {
    return <div>Is getting data....</div>
  }
  if (!tripDetails) {
    return <div>Trip not found</div>
  }
  return (<div className='trip-details-container container'>
    <div>
      <FormTrip data={tripDetails} />
      <div className="footer-btn">
        <button onClick={props.history.goBack} className="btn back-btn">Back</button>
      </div>
    </div>
  </div>);
}

TripDetails.propTypes = {
  actions: PropTypes.shape({
    getTripDetails: PropTypes.func.isRequired,
  }),
  tripDetails: PropTypes.object,
  isLoading: PropTypes.bool,
};
TripDetails.defaultProps = {
  TripDetails: {},
};
const mapStateToProps = state => ({
  tripDetails: state.tripReducer.get('tripDetails'),
  isLoading: state.tripReducer.get('isLoading'),
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripDetails);
