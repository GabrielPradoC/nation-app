import { IDomUtils } from "../common/Interfaces/IDomUtils";

/**
 * DomUtils
 * 
 * Classe para agrupar operações que envolvam o DOM
 */
export class DomUtils implements IDomUtils {
    /**
     * createFlagElement
     * 
     * Cria um eleemento de bandeira
     * 
     * @param name 
     * @param source 
     * @returns 
     */
    public createFlagElement(name: string, source: string): HTMLImageElement {
        const newFlag = document.createElement('img') as HTMLImageElement;
        newFlag.src = source;
        newFlag.id = name;
        newFlag.alt = `Flag of ${name}`;
        newFlag.title = `Flag of ${name}`;
        newFlag.classList.add('flag');
        return newFlag;
    }

    /**
     * createFragmentFromElements
     * 
     * Retorna um document fragment contendo todos os elementos no array informado
     * 
     * @param elements - Elementos html
     * @returns Document Fragment
     */
    public createFragmentFromElements(elements: HTMLElement[]): DocumentFragment {
        const fragment = document.createDocumentFragment();
        for (let element of elements) {
            fragment.appendChild(element);
        }
        return fragment;
    }

    /**
     * clearElementChildren
     * 
     * Remove todos os elementos filhos de um elemento pai
     * 
     * @param parent - Elemento pai
     */
    public clearElementChildren(parent: HTMLElement): void {
        while (parent.firstChild) {
            parent.removeChild(parent.lastChild);
        }
    }

    /**
     * clearAndAppendElements
     * 
     * Limpa os elementos filhos do elemento pai e anexa o elemento informado
     * 
     * @param parent - Elemento pai
     * @param childElement - Elemento filho
     */
    public clearAndAppendElements(parent: HTMLElement, childElement: HTMLElement): void {
        this.clearElementChildren(parent);
        parent.append(childElement)
    }
}
