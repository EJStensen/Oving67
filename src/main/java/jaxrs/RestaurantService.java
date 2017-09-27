package jaxrs;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("/restaurant")
public class RestaurantService {
	private static Map<Integer, Bord> b = new HashMap<Integer, Bord>();

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Collection<Bord> getBord(){
		return b.values();
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public void addBord(Bord bord){
		String a = bord.getNavn();
		int key = a.charAt(0)+a.charAt(a.length() - 1);
		b.put(key, bord);
	}
}
