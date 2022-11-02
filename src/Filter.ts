import { EnumEndpoints_V1 } from "./common/Enums/EnumEndpoints_V1";
import { IDomUtils } from "./common/Interfaces/IDomUtils";

/**
 * Filter
 * 
 * Classe para manipulação dos elementos de filtro da página
 */
export class Filter {

    /**
     * Elemento do filtro que vai determinar a rota da requisição
     */
    private filterElement: HTMLSelectElement;

    /**
     * Elemento do filtro que vai retornar o parâmetro para busca
     */
    private filterParamElement: HTMLSelectElement;

    /**
     * Caminho relativo para a pasta com as opções
     */
    private optionsPath: string;

    /**
     * Classe com funções auxiliares para manipulação do dom
     */
    private domHelper: IDomUtils;

    private paramsFilterLabelElement: HTMLElement;

    /**
     * Inicializa a classe
     * 
     * @param filterElementId - Id do select de filtro de tipo de busca
     * @param filterParamElementId - Id do select de filtro de parâmetro de busca
     * @param optionsPath - Caminho relativo para a pasta com as opções
     */
    public constructor(
        filterElementId: string,
        filterParamElementId: string,
        paramsFilterLabelId: string,
        optionsPath: string,
        domHelper: IDomUtils
    ){
        this.filterElement = document.getElementById(filterElementId) as HTMLSelectElement;
        this.filterParamElement = document.getElementById(filterParamElementId) as HTMLSelectElement;
        this.paramsFilterLabelElement = document.getElementById(paramsFilterLabelId);
        this.optionsPath = optionsPath;
        this.domHelper = domHelper;
    }

    /**
     * getFilterValue
     * 
     * Retorna o valor slecionado do select de tipo
     * 
     * @returns Valor selecionado
     */
    public getFilterValue(): string {
        return this.filterElement.selectedOptions[0].value;
    }

    /**
     * getParamValue
     * 
     * @returns Valor selecionado
     */
    public getParamValue(): string {
        return this.filterParamElement.selectedOptions[0].value
    }

    /**
     * importOptions
     * 
     * Importa as opções da pasta informada
     * 
     * @param option - Nome da rota para qual os parâmetros devem ser importados
     * @returns Array com todas as opções
     */
    private async importOptions(option: string): Promise<HTMLOptionElement[]> {
        const options = await import(`${this.optionsPath}/${option}.js`) as HTMLOptionElement[];
        return options;
    }

    /**
     * changeFilterParamOptions
     * 
     * Altera as opções do select de parâmetros para as opções informadas
     * 
     * @param options - Opções para serem trocadas
     */
    private changeFilterParamOptions(options: HTMLOptionElement[]): void {
        this.domHelper.clearElementChildren(this.filterParamElement);
        const fragment = document.createDocumentFragment();

        options.forEach(option => {
            fragment.appendChild(option);
        });

        this.filterParamElement.appendChild(fragment);
    }

    /**
     * handleChangeEvent
     * 
     * Método para tratar do evento de change do filtro de tipo
     */
    private async handleChangeEvent(): Promise<void> {
        const currentOption = this.getFilterValue() as EnumEndpoints_V1;

        switch (currentOption) {
            case EnumEndpoints_V1.REGION:
                this.changeFilterParamOptions(
                    await this.importOptions('regions')
                );
                this.changeLabelText('Região');
                break;
            case EnumEndpoints_V1.CAPITAL:
                this.changeFilterParamOptions(
                    await this.importOptions('capital')
                );
                this.changeLabelText('Capital');
                break;
            case EnumEndpoints_V1.LANGUAGE:
                this.changeFilterParamOptions(
                    await this.importOptions('language')
                );
                this.changeLabelText('Língua');
                break;
            case EnumEndpoints_V1.NAME:
                this.changeFilterParamOptions(
                    await this.importOptions('country')
                );
                this.changeLabelText('País');
                break;
            case EnumEndpoints_V1.CALLING_CODE:
                this.changeFilterParamOptions(
                    await this.importOptions('callCode')
                );
                this.changeLabelText('Código de ligação');
                break;
        }
    }

    /**
     * changeLabelText
     * 
     * Altera o texto no label do select de parâmetro de busca
     * 
     * @param newText - Novo texto para o label
     */
    private changeLabelText(newText: string): void {
        this.paramsFilterLabelElement.innerText = newText;
    }

    /**
     * handleLoadEvent
     * 
     * Método para ser disparado no load da página 
     */
    public handleLoadEvent(): void {
        const changeEvent = new Event('change');
        this.filterElement.dispatchEvent(changeEvent);
    }

    /**
     * setupEventListeners
     * 
     * Método para inicializar os event listeners da classe
     */
    public setupEventListeners(): void {
        this.filterElement.addEventListener(
            'change',
            this.handleChangeEvent
        );
    }
}