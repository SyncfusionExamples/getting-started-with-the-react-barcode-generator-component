import { BarcodeGeneratorComponent, QRCodeGeneratorComponent, DataMatrixGeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import './App.css';
let barcodeInstance:any;
function App() {
  function exportImage() {
    barcodeInstance.exportImage('Syncfusion-image', 'JPG');
  }
  return (
    <div className="App">
      <ButtonComponent onClick={exportImage}>Export</ButtonComponent>
     <BarcodeGeneratorComponent  ref={barcode => (barcodeInstance = barcode)}
      value='SYNC123'
      width={"200px"} height={"150px"}
      type='Code39' foreColor='blue' 
      displayText={{ text: "CODE39-BARCODE" }}></BarcodeGeneratorComponent>
      <QRCodeGeneratorComponent
      value='SYNC123'
      width={"200px"} height={"150px"}
      foreColor='blue' displayText={{ text: "Syncfusion" }} >
      </QRCodeGeneratorComponent>
      <DataMatrixGeneratorComponent
       value='SYNCUser'
       width={"200px"} height={"150px"}
       foreColor='blue'>
      </DataMatrixGeneratorComponent>
    </div>
  );
}

export default App;
