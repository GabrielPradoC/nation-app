export interface IDomUtils {
    createFragmentFromElements(elements: HTMLElement[]): DocumentFragment;

    clearElementChildren(parent: HTMLElement): void;

    clearAndAppendElements(parent: HTMLElement, childElement: HTMLElement): void;
}
