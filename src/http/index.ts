import type ICategoria from "../interfaces/ICategorias";
import type IReceita from "../interfaces/IReceitas";

async function obterDadosUrl<T>(url:string) {
  const resposta = await fetch(url);
  return resposta.json() as T;
}

export async function obterCategorias(): Promise<ICategoria> {
  return obterDadosUrl<ICategoria>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json')
}

export async function obterReceitas(): Promise<IReceita> {
  return obterDadosUrl<IReceita>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json')
}