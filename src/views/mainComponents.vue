<template>
  <div class="container-expenses">


    <div class="expenses">
      <h3>Add Expenses</h3>
      <button>+</button>
    </div>

    <div class="main">
      <div class="main-header">
        <slot name="money">
          <h1>{{ money.toFixed(2) }}</h1>
        </slot>
      </div>
      <div class="main-body">
        <slot name="about">
          <p>{{ about }}</p>
        </slot>
      </div>
      <div class="main-footer">
        <slot name="footer">
          <p>{{ date }}</p>
        </slot>
      </div>
    </div>

<div class="container-income">
    <div class="income">
      <h3>Add Income</h3>
      <button>+</button>
    </div>

    <div class="main-income">
      <div class="main-income-header">
        <slot name="money">
          <h1>{{ money.toFixed(2) }}</h1>
        </slot>
      </div>
      <div class="main-income-body">
        <slot name="about">
          <p>{{ about }}</p>
        </slot>
      </div>
      <div class="main-income-footer">
        <slot name="footer">
          <p>{{ date }}</p>
        </slot>
      </div>
    </div>
</div>


  </div>
</template>

<script>
export default {
  name: "MainComponent",
  data() {
    return {
      money: 20.0,
      about: "Shopping",
      date: new Date().toDateString(),
    };
  },
};
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.container-expenses {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  margin-top: 90px;
}

.container-income {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  margin-top: 90px;
}

.expenses {
  background: #f8f9fa;
  padding: 15px;
  margin-left: 50px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 200px;
}

.expenses button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  margin-left: 20px;
  cursor: pointer;
  border-radius: 3px;
}

.main {
  background-color: red;
  border-radius: 5px;
  padding: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-header h1 {
  color: white;
}

.main-body{
    width: 100%;
    border-bottom: 1px solid white;
}

.main-body p {
  color: white;
  padding-bottom: 10px;
  padding-top: 0;
  margin-bottom: 0;
  width: 100px;
  margin-left: 39.5%;
}

.main-footer p {
  color: white;
  margin-top: 10px;
  font-size: 12px;
  margin-bottom: 0;
}


.income {
  background: #f8f9fa;
  padding: 15px;
  margin-left: 50px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 200px;
}

.income button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  margin-left: 20px;
  cursor: pointer;
  border-radius: 3px;
}

.main-income {
  background-color: green;
  border-radius: 5px;
  padding: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-income-header h1 {
  color: white;
}

.main-income-body{
    width: 100%;
    border-bottom: 1px solid white;
}

.main-income-body p {
  color: white;
  padding-bottom: 10px;
  padding-top: 0;
  margin-bottom: 0;
  width: 100px;
  margin-left: 39.5%;
}

.main-income-footer p {
  color: white;
  margin-top: 10px;
  font-size: 12px;
  margin-bottom: 0;
}



</style>
