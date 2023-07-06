import axios from 'axios';

export const getBrand = (id = 'all') => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get(`/api/brand/${id}`)
        .then(res => {
          if (res && res.data) {
            resolve(res.data);
          }
          reject([]);
        })
        .catch(err => {
          reject([]);
        });
    } catch (err) {
      reject([]);
    }
  });
};

export const getPaymentMethod = (id = 'all') => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get(`/api/payment-method/${id}`)
        .then(res => {
          if (res && res.data) {
            resolve(res.data);
          }
          reject([]);
        })
        .catch(err => {
          reject([]);
        });
    } catch (err) {
      reject([]);
    }
  });
};


export const getExpensesType = (id = 'all') => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get(`/api/expenses-type/${id}`)
        .then(res => {
          if (res && res.data) {
            resolve(res.data);
          }
          reject([]);
        })
        .catch(err => {
          reject([]);
        });
    } catch (err) {
      reject([]);
    }
  });
};

export const getSupplier = (id = 'all') => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get(`/api/supplier/${id}`)
        .then(res => {
          if (res && res.data) {
            resolve(res.data);
          }
          reject([]);
        })
        .catch(err => {
          reject([]);
        });
    } catch (err) {
      reject([]);
    }
  });
};

export const getBalanceExp = (start, end) => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get(`/api/get-balance-exp`,
          {
            date_range: {
              startDate: new Date(start),
              endDate: new Date(end)
            },
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        .then(res => {
          if (res && res.data) {

            resolve(res.data);
          }
          reject([]);
        })
        .catch(err => {
          reject([]);
        });
    } catch (err) {
      reject([]);
    }
  });
};

export const getBalanceInc = () => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get(`/api/get-balance-inc`)
        .then(res => {
          if (res && res.data) {
            resolve(res.data);
          }
          reject([]);
        })
        .catch(err => {
          reject([]);
        });
    } catch (err) {
      reject([]);
    }
  });
};

export const getUser = () => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get(`/api/get-user`)
        .then(res => {
          if (res && res.data) {
            resolve(res.data);
          }
          reject([]);
        })
        .catch(err => {
          reject([]);
        });
    } catch (err) {
      reject([]);
    }
  });
};

export const getCurrency = () => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get(`/api/currency-new`)
        .then(res => {
          if (res && res.data) {
            resolve(res.data);
          }
          reject([]);
        })
        .catch(err => {
          reject([]);
        });
    } catch (err) {
      reject([]);
    }
  });
};

export const getCountry = () => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get(`/api/country`)
        .then(res => {
          if (res && res.data) {
            resolve(res.data);
          }
          reject([]);
        })
        .catch(err => {
          reject([]);
        });
    } catch (err) {
      reject([]);
    }
  });
};