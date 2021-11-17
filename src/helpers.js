export function renderingStatus(status) {
  if (status === "received") {
    return <mark className="box-table-success">Recibido</mark>;
  } else if (status === "leaving") {
    return <mark className="box-table-warning">De Salida</mark>;
  } else if (status === "onitsway") {
    return <mark className="box-table-secundary">En camino</mark>;
  } else if (status === "canceled") {
    return <mark className="box-table-cancel">Cancelados</mark>;
  } else if (status === "paymenterror") {
    return <mark className="box-table-error">Error en Pago</mark>;
  }
}

export function getTotalByCondition(object, filter, condition, value) {
  let counter = 0;
  if(condition === ">"){
    object.forEach((current) => {
      if (current[filter] > value) {
        counter++;
      }
    });
  } else if(condition === "<"){
    object.forEach((current) => {
      if (current[filter] < value) {
        counter++;
      }
    });
  } else{
    object.forEach((current) => {
      if (current[filter] === value) {
        counter++;
      }
    });
  }
  return counter;
}

export function getAmountByCondition(object, filter_1, condition, value_1, filter_2, value_2) {
  let counter = 0;
  if(condition === ">"){
    object.forEach((current) => {
      if (current[filter_1] > value_1) {
        if (current[filter_2] === value_2) {
          counter++;
        }
      }
    });
  } else if(condition === "<"){
    object.forEach((current) => {
      if (current[filter_1] < value_1) {
        if (current[filter_2] === value_2) {
          counter++;
        }
      }
    });
  } else{
    object.forEach((current) => {
      if (current[filter_1] === value_1) {
        if (current[filter_2] === value_2) {
          counter++;
        }
      }
    });
  }
  return counter;
}

export function getAmountByCategory(object, department, isOffer, status) {
  let counter = 0;
  object.forEach((current) => {
    if(status !== "all"){
      if (current.department === department && current.status === status) {
        if(isOffer){
          for(let cur of current.subItems){
            if(cur.offerPrice > 0){counter++;break;}
          }
        }else{
          counter++;
        }
      } 
    } else{
      if (current.department === department) {
        if(isOffer){
          for(let cur of current.subItems){
            if(cur.offerPrice > 0){counter++;break;}
          }
        }else{
          counter++;
        }
      } 
    } 
  });
  return counter;
}

export function formatedNumber(num) {
  if (num >= 1000 && num < 10000) {
    let newNum = num + "";
    let formated = "";

    for (let x = 0; x < newNum.length; x++) {
      if (x === 1) {
        formated += ",";
      }
      formated += newNum.charAt(x);
    }

    return formated;
  } else if (num >= 10000) {
    let newNum = num + "";
    let formated = "";

    for (let x = 0; x < newNum.length; x++) {
      if (x === 2) {
        formated += ",";
      }
      formated += newNum.charAt(x);
    }

    return formated;
  }

  return num;
}
