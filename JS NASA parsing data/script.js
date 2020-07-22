

getData();
const xs = [];
const ys =[];
  async function getData() {
    const response = await fetch ('nasadata.csv');
    const data = await response.text();
    console.log(data);

    const table = data.split('\n').slice(1);
    table.forEach(row => {
      const colums = row.split(',');
      const year = colums[0];
      xs.push(year);
      const temp = colums[1];
      ys.push(parseFloat(temp) + 14);
      console.log(year, temp);
    });
    return {xs, ys};

  }
