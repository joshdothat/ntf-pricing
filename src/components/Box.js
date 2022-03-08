import React from 'react';

const Box = (props) => {
  const { title, btnClass, btnTitle, price, feature, revenue, keyword } = props;
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">{title}</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">
          ${price} <small className="text-muted">/ mo</small>
        </h1>
        <p>+{revenue}% of affiliate revenue</p>
        <ul className="list-unstyled mt-3 mb-4 box-align">
          {feature &&
            feature.map((data, index) => {
              return (
                <li
                  style={{
                    margin: '10px 0',
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'flex-start',
                  }}
                  key={index}
                >
                  {data.available ? (
                    <img src="/tick.svg" style={{ width: '20px' }} />
                  ) : (
                    <img src="/cross.svg" style={{ width: '20px' }} />
                  )}
                  {'   '}
                  <span>{data.title}</span>
                </li>
              );
            })}
        </ul>
        {/* <button type="button" className={`btn btn-lg btn-block ${btnClass}`}>
          {btnTitle}
        </button> */}
        <strong>Text "{keyword}"</strong>
        <h4 className="mt-2">9146855775</h4>
      </div>
    </div>
  );
};

export default Box;
