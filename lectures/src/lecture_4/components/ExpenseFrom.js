function ExpenceForm() {
  return (
    <form>
      <div class="form-group row">
        <label for="title" class="col-sm-2 col-form-label">
          Title
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="Title"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="date" class="col-sm-2 col-form-label">
          Date
        </label>
        <div class="col-sm-10">
          <input
            type="date"
            class="form-control"
            id="date"
            placeholder="Date"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="amount" class="col-sm-2 col-form-label">
          Amount
        </label>
        <div class="col-sm-10">
          <input
            type="number"
            class="form-control"
            id="amount"
            placeholder="Amount"
            min="0.01" step="0.01"
          />
        </div>
      </div>
      <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Submit form</button>
    </div>
  </div>
    </form>
  );
}

export default ExpenceForm;
