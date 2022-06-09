import AddButton from '../UI/Button';

const AddPage = () => {
  return (
    <div className='add-container'>
      <h1>Add</h1>
      <form className='add-form'>
        <label>Enter Number of People:</label>
        <input type='number' placeholder='Number of People' />
        <label>Enter price</label>
        <input type='number' placeholder='Price Amount' step='0.01' />
        <AddButton />
      </form>
    </div>
  );
};

export default AddPage;
