describe("dashboard", ()=>{
    it("dashboard", ()=>{
        cy.login();
        cy.viewport(1920,1080);
        cy.get("[data-test='navbar-links-Dashboard").should("be.visible").contains("Dashboard");
        cy.viewport(400,300);
        cy.get("[data-test='navlinks-hamburger']").should("be.visible");
        cy.get('[data-test="addtodo-button"]').should("be.visible").contains("Add a new todo");


    })
})


//* bide title bakilabilir her sayfaya gidince 
//? -1 - logout
//? 1 - dashboardda 
    //? -z- navbarda logo gozukuyormu - username gozukuyormu - navbar linkleri tamamla negatiflere gerek yok
    //? a- 3 kategori gozukuyormu    
    //? b-  todo ekleme -ekleyince gozukme
    //? c- todonun butun actionlari
//? 2 - detail sayfasina gitme orda step eklmee gozukmesi silme completed isi
//? 3 - old todos ekraninda bi tarih  sec geliyormu todolar ordan detail sayfaina gidiyormu sadce old  todo da 3  kategori gozukuyormu
//? 


//! nowie usestoryler ek =>

// ?*ok big todos yapialcak - tablo oalrak users tablosu kullailir ismi degisip
//? detay sayfasinda taskin kendisi icin editler olmali tarihine kadar edit koyulmali
//? oldotodo sayfasinda edit olmasina gerek yok ozmana sadece completed olmayanlari make today's todo buttonu koymak lazim.
//?detay sayfasinda steplere edit lazim bide steplerin yeri degismeli ya
//? dashboarddaki todolarinda kendi kutusu icinde sirasi degistirilebilmeli

//? big todos sayfasinin detailinden veya kendisinden make todays todo secenegi olmali!!!!
// bunu dusun bi



//? detail sayfalarindan go back butonu 