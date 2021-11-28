import {browser, element, by} from 'protractor';

describe('Mi Test', ()=>{
    //configuramos nuestro bloque
    beforeEach(()=>{
        browser.get("/");
    });


    //creación de prueba 1
    it("El page 1 se muestra por defecto", ()=>{
        expect(element(by.css(".tittle ion-title")).getText()).toContain("DeTodoModa");

    }); //fin de prueba 1


    //creación de prueba 1
    it("El page 2 se muestra por defecto", ()=>{
        expect(element(by.css(".tittle ion-title")).getText()).toContain("Gorros");

    }); //fin de prueba 1

});