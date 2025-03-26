import javax.swing.JOptionPane;

public class Principal {


public static void main(String args[])
{
    //Instanciar clase : Usar constructor por defecto
   
    Persona Ob1 = new Persona();

    JOptionPane.showMessageDialog(null,"Estado del objeto\n"+Ob1.getNombre()+" "+Ob1.getDocumento());

String nom;
int doc;
nom = JOptionPane.showInputDialog("Digite su nombre");
doc = Integer.parseInt(JOptionPane.showInputDialog("Dijite su documento"));

Persona Ob2 = new Persona(nom,doc);

//Objeto.metodo();

JOptionPane.showMessageDialog(null, "Su estado es: \n"+Ob2.getNombre()+" "+Ob2.getDocumento());

JOptionPane.showMessageDialog(null, Ob2.toString());

Ob1.setNombre("Juan");

JOptionPane.showMessageDialog(null, "Su estado es: \n"+Ob1.getNombre()+" "+Ob1.getDocumento());


}






}