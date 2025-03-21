public class Persona {
    private String nombre;
    private int documento;

    public Persona()
    {
        this.nombre = "pepito perez";
        this.documento = 12345;
    }
    public Persona(String nombre, int documento)
    {

        this.nombre = nombre ;
        this.documento = documento ;

    }

    public String getNombre()
    {
           return nombre;
    }

    public int getDocumento() {
    
        return documento;
    }
    public void setNombre(String nombre){
        this.nombre = nombre;
    }
    public void setDocumento(int documento){
    this.documento = documento;
    }

@Override
public String toString(){
    return "su nombre es "+nombre+" y su documento es"+documento;
}


}
