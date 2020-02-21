import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { tripModal } from '../../model';
import './styles.scss';

function FormTrip(props) {
  const { data } = props;
  const dataModel = useMemo(() => tripModal(data), [data]);
  return (<div className="form-trip row">
    <h1>Trip details</h1>
    {dataModel.map(d => (<div className="col-12 col-sm-12 col-md-8" key={d.label}>
      <label>{d.label}</label>
      <input value={d.value} disabled />
    </div>))}
  </div>);
}

FormTrip.propTypes = {
  data: PropTypes.object,
};
FormTrip.defaultProps= {
  data: {},
};

export default FormTrip;
