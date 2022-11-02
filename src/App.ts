import { Filter } from "./Filter";
import { DomUtils } from "./utils/DomUtils";

class App {

    protected filter: Filter;

    /**
     * init
     * 
     * Inicializa a página
     */
    public init(): void{
        const domHelpper = new DomUtils();
        this.filter = new Filter(
            'select-search',
            '2filter-options',
            'txt',
            './searchParams',
            domHelpper
        );
        
        this.setupListeners();
    }

    /**
     * setupListeners
     * 
     * Inicializa os event listeners da página
     */
    protected setupListeners(): void {
        this.filter.setupEventListeners();
        window.addEventListener('load', () => {
            this.filter.handleLoadEvent();
        });
    }
}

const app = new App();
app.init();
