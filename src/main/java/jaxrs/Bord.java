package jaxrs;

class Bord {
	
	//private int resid;
	private int bordnr;
	private String dato;
	private String navn;
	private String gjester;
	private String forrett;
	private String hovedrett;
	private String dessert;
	private String drikke;
	
	public Bord(){
		
	}
	/*
	public int getResId(){
		return resid;
	}
	
	public void setResId(int resid){
		this.resid = resid;
	}
	*/
	
	public int getBordnr(){
		return bordnr;
	}
	
	public void setBordnr(int bordnr){
		this.bordnr = bordnr;
	}
	
	public String getDato(){
		return dato;
	}
	
	public void setDato(String dato){
		this.dato = dato;
	}
	
	public String getNavn(){
		return navn;
	}
	
	public void setNavn(String navn){
		this.navn = navn;
	}
	
	public String getGjester(){
		return gjester;
	}
	
	public void setGjester(String gjester){
		this.gjester = gjester;
	}
	
	public String getForrett(){
		return forrett;
	}
	
	public void setForrett(String forrett){
		this.forrett = forrett;
	}
	
	public String getHovedrett(){
		return hovedrett;
	}
	
	public void setHovedrett(String hovedrett){
		this.hovedrett = hovedrett;
	}
	
	public String getDessert(){
		return dessert;
	}
	
	public void setDessert(String dessert){
		this.forrett = dessert;
	}
	
	public String getDrikke(){
		return drikke;
	}
	
	public void setDrikke(String drikke){
		this.drikke = drikke;
	}
}