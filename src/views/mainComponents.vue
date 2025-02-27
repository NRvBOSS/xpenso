<template>
  <div class="totalAndAdd">
    <div class="add">
      <h3>Add your daily finance</h3>
      <button @click="showModal = true">+</button>

      <div v-if="showModal" class="modal-overlay">
        <div class="modal">
          <div class="cart-container">
            <div class="expenses">
              <label>Add your daily expenses.</label>
              <input
                class="expenses-input"
                type="number"
                v-model="money"
                placeholder="example - 20.00"
              />
            </div>
            <div class="submit-button">
              <button @click="addFinance" class="add-finance">Add</button>
            </div>
          </div>

          <div class="cart-container">
            <div class="income">
              <label>Add your daily expenses.</label>
              <input
                class="income-input"
                type="number"
                v-model="money"
                placeholder="example - 20.00"
              />
            </div>
            <div class="submit-button">
              <button @click="addFinance" class="add-finance">Add</button>
            </div>
          </div>

          <div class="add-buttons"></div>

          <button @click="showModal = false" class="close-button">Close</button>
        </div>
      </div>
    </div>
    <div class="total">
      <h3>Total</h3>
      <p>{{ money }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainComponent",
  data() {
    return {
      showModal: false,
      money: "",
      about: "",
      date: new Date().toDateString(),
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.totalAndAdd {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-top: 90px;
}

.add {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 200px;
}

.add button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 3px;
}

.add button:hover {
  background-color: #0056b3;
}

.total {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 200px;
  justify-content: space-between;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.expenses {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: red;
  border-radius: 15px;
}

.income {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: green;
  border-radius: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
}

input {
  border-radius: 0 0 15px 15px;
  padding: 10px;
  width: 100%;
  border: none;
}

.expenses-input {
  border-radius: 2px solid red;
}

.income-input {
  border-radius: 2px solid green;
}

.add-buttons {
  display: flex;
  gap: 10px;
  justify-content: space-between;
}

.cart-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #f8f9fa;
  border-radius: 20px;
}

.submit-button {
  margin-left: auto;
}
</style>
