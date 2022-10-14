import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <h3>Conversor de Temperatura</h3>
        <form action='#'>
          <p>Seleccione la unidad de temperatura a ingresare</p>
          <p><label>
              <input type="radio" id="CI" name="temi" value="C"/><span>Celcius</span>
          </label></p>
          <p><label>
              <input type="radio" id="KI" name="temi" value="K"/><span>Kelvin</span>
          </label></p>
          <p><label>
              <input type="radio" id="FI" name="temi" value="F"/><span>Fahrenheit</span>
          </label></p>

          <label>Ingrese la temperatura a convetir: </label>
          <input style={styles.intpu} type="number" id="tempInic" step="any"></input>

          <br></br>
          <label>convetir a</label>
          <br></br>

          <label>seleccione la unidad a la que decea convertir</label>
          <p><label>
              <input type="radio" id="CF" name="temf" value="C"/><span>Celcius</span>
          </label></p>
          <p><label>
              <input type="radio" id="KF" name="temf" value="K"/><span>Kelvin</span>
          </label></p>
          <p><label>
              <input type="radio" id="FF" name="temf" value="F"/><span>Fahrenheit</span>
          </label></p>

          <Button onPress={convert} title='Convertir'></Button>

          <div id="respuesta"></div>
        </form>
      <StatusBar style="auto" />
    </View>
  );
}



function convert()
{
  var tempIn=getRadioInicial();//unidad inicial
  var tempFi=getRadioFinal();//unidad a convertir
  var temper=parseFloat(document.getElementById("tempInic").value);

  if(tempIn == tempFi)
  {
    var reques=(temper + " " + tempFi + "°");
    document.getElementById("respuesta").innerHTML = reques;
    alert(reques);
  }
  else if(tempIn == "K" && tempFi == "C")
  {
    var ktoc=(temper-273.15);
    var reques=(ktoc +" C°");
    document.getElementById("respuesta").innerHTML = reques;
    alert(reques);
  }
  else if(tempIn == "K" && tempFi == "F")
  {
    var ktof=(1.8*(temper-273.15))+32;
    var reques=(ktof +" F°");
    document.getElementById("respuesta").innerHTML = reques;
    alert(reques);
  }
  else if(tempIn == "F" && tempFi == "K")
  {
    var ftok=((temper-32)/1.8)+273.15;
    var reques=(ftok +" K°");
    document.getElementById("respuesta").innerHTML = reques;
    alert(reques);
  }
  else if(tempIn == "F" && tempFi == "C")
  {
    var ftoc=(temper-32)/1.8;
    var reques=(ftoc +" C°");
    document.getElementById("respuesta").innerHTML = reques;
    alert(reques);
  }
  else if(tempIn == "C" && tempFi == "K")
  {
    var ctok=(temper+273.15);
    var reques=(ctok +" K°");
    document.getElementById("respuesta").innerHTML = reques;
    alert(reques);
  }
  else if(tempIn == "C" && tempFi == "F")
  {
    var ctof=(temper*1.8)+32;
    var reques=(ctof +" F°");
    document.getElementById("respuesta").innerHTML = reques;
    alert(reques);
  }
  else
  {
    reques="Error";
    document.getElementById("respuesta").innerHTML = reques;
    alert(reques);
  } 
}

function getRadioInicial(){
    var select="error";
    var getSelectedValue = document.querySelector( 'input[name="temi"]:checked');   
    if(getSelectedValue != null) {   
        select=getSelectedValue.value;
        //console.log(getSelectedValue);
    }
    //console.log(select);
    return select
}

function getRadioFinal()
{
    var select=256;
    var getSelectedValue = document.querySelector( 'input[name="temf"]:checked');   
    if(getSelectedValue != null) 
    {   
        select=getSelectedValue.value;
        //console.log(getSelectedValue);
    }
    //console.log(select);
    return select
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2B5F8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  intpu:{
    backgroundColor: '#B1E6C4',
  },
});
