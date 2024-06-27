import axios from "axios";

export class UseApi {
  public async getProducts() {
    try {
      const res = await axios.get(import.meta.env.VITE_API_BASE_URL);
      return res;
    } catch (err) {
      throw new Error("Erro ao carregar produtos");
    }
  }
}

// subir o back-end: json-server --watch db.json
