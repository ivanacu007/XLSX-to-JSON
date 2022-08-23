let selectedFile;
let jsonData;
// console.log(window.XLSX);
document.getElementById('input').addEventListener("change", (event) => {
    selectedFile = event.target.files[0];
})

let data = [{
    "name": "jayanth",
    "data": "scd",
    "abc": "sdef"
}]


document.getElementById('button').addEventListener("click", async () => {
    XLSX.utils.json_to_sheet(data, 'out.xlsx');
    if (selectedFile) {
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload = (event) => {
            let data = event.target.result;
            let workbook = XLSX.read(data, { type: "binary" });
            // console.log(workbook);
            workbook.SheetNames.forEach(sheet => {
                let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                // console.log(rowObject);

                jsonData = rowObject;
                // console.log(jsonData);
                getDepartments();
            });
        }
    }
});

let departments = [];
let currentDepartments = [];

const categories = [
    {
        "name": "Lacteos",
        "id": 01,
        "departments": []
    },
    {
        "name": "Salchichoneria",
        "id": 02,
        "departments": []
    },
    {
        "name": "Panaderia y tortilleria",
        "id": 03,
        "departments": []
    },
    {
        "name": "Galletas",
        "id": 04,
        "departments": []
    },
    {
        "name": "Botanas y dulces",
        "id": 05,
        "departments": []
    },
    {
        "name": "Jugos y bebidas",
        "id": 06,
        "departments": []
    },
    {
        "name": "Cervezas, vinos y licores",
        "id": 07,
        "departments": []
    },
    {
        "name": "Congelados",
        "id": 08,
        "departments": []
    },
    {
        "name": "Despensa",
        "id": 09,
        "departments": []
    },
    {
        "name": "Limpieza y mascotas",
        "id": 10,
        "departments": []
    },
    {
        "name": "Bebes y niños",
        "id": 11,
        "departments": []
    },
    {
        "name": "Farmacia",
        "id": 12,
        "departments": []
    },
    {
        "name": "Higiene y belleza",
        "id": 13,
        "departments": []
    },
    {
        "name": "Desechables",
        "id": 14,
        "departments": []
    },
    {
        "name": "The wings",
        "id": 15,
        "departments": []
    },
    {
        "name": "Cocteleria",
        "id": 16,
        "departments": []
    },
    {
        "name": "Accesorios telcel",
        "id": 17,
        "departments": []
    },
]

const categories_w_departments = [
    {
        "ID": 1,
        "Categoria": "Lacteos",
        "Departamento": "Alpura, Danone, Lala",
        "DepartamentoArray": [],
        "Products": []
    },
    {
        "ID": 2,
        "Categoria": "Salchichoneria",
        "Departamento": "Cremeria, Fud",
        "DepartamentoArray": [],
        "Products": []
    },
    {
        "ID": 3,
        "Categoria": "Panaderia y Tortilleria",
        "Departamento": "Bimbo Blanco, Tia Rosa",
        "DepartamentoArray": [],
        "Products": []
    },
    {
        "ID": 4,
        "Categoria": "Galletas",
        "Departamento": "Gamesa, Marinela Galleta, Marinela Pastel",
        "DepartamentoArray": [],
        "Products": []
    },
    {
        "ID": 5,
        "Categoria": "Botanas y Dulces",
        "Departamento": "Barcel, Botana, chicles mondelez, Chocolates, Dulces, Ricolino, Sabritas, xalapeña",
        "DepartamentoArray": [],
        "Products": []
    },
    {
        "ID": 6,
        "Categoria": "Jugos y Bebidas",
        "Departamento": "Agua, Agua hidropura, bebidas, bodega, Bonafont, Coca Cola, Pepsi, COCA 1, COCA 2, COCA 3, COCA 4, COCA 5, COCA 6, COCA 7, COCA 8, COCA 9, COCA 10, COCA 11, COCA 12, COCA 13, COCA 14, COCA 15, COCA 16, COCA 17, COCA 18, COCA 19, COCA 20, COCA 21, COCA 22, COCA 23, COCA 24, COCA 25, COCA 26, COCA 27, COCA 28, COCA 29, COCA 30, COCA 32, COCA 33, COCA 34, COCA 35, COCA 36, COCA 37, COCA 38, COCA 39, COCA 40, COCA 41, COCA 42, COCA 43, COCA 43, COCA 44, Jugos, peñafiel",
        "DepartamentoArray": [],
        "Products": []
    },
    {
        "ID": 7,
        "Categoria": "Cervezas Vinos y Licores",
        "Departamento": "Vino, Corona, Hielo, Maskking, Preparadas, Tecate",
        "DepartamentoArray": [],
        "Products": []
    },
    {
        "ID": 8,
        "Categoria": "Congelados",
        "Departamento": "Nestle Helados",
        "DepartamentoArray": [],
        "Products": []
    },
    {
        "ID": 9,
        "Categoria": "Despensa",
        "Departamento": "Abarrotes",
        "DepartamentoArray": [],
        "Products": []
    },
    {
        "ID": 10,
        "Categoria": "Limpieza y Mascotas",
        "Departamento": "Detergentes, Pedigree",
        "DepartamentoArray": [],
        "Products": []
    },
    {
        "ID": 11,
        "Categoria": "Bebes y Niños",
        "Departamento": "",
        "DepartamentoArray": [],
        "Products": []
    },
    {
        "ID": 12,
        "Categoria": "Farmacia",
        "Departamento": "Farmacia, magic honey",
        "DepartamentoArray": [],
        "Products": []
    },
    {
        "ID": 13,
        "Categoria": "Higiene y Belleza",
        "Departamento": "",
        "DepartamentoArray": [],
        "Products": []
    },
    {
        "ID": 14,
        "Categoria": "Desechables",
        "Departamento": "Higienicos, hogar, sabinos plasticos",
        "DepartamentoArray": [],
        "Products": []
    },
    {
        "ID": 15,
        "Categoria": "The Wings",
        "Departamento": "",
        "DepartamentoArray": [],
        "Products": []
    }
]

let categories_w_p_and_d = [];

const getDepartments = () => {
    categories_w_departments.forEach(item => {
        let dep_array = [];
        if (item['Departamento'].includes(',') && item['Departamento'] != "") {
            dep_array = item['Departamento'].split(',');
        } else {
            dep_array = [item['Departamento']];
        }
        let trimArray = [];
        dep_array.forEach(item => {
            let ts = item.trimStart();
            let te = ts.trimEnd();
            trimArray.push(te);
        })
        item["DepartamentoArray"] = trimArray;
    });
    setProductsToCategories();
}

const setProductsToCategories = async () => {
    categories_w_departments.forEach(cat => {
        let prod = jsonData.filter(p => cat['DepartamentoArray'].includes(p.Departamento));
        cat['Products'].push(prod);
    });
    document.getElementById("jsondata").innerHTML = JSON.stringify(categories_w_departments, undefined, 4)
    console.log(categories_w_departments)
    createJSONFile();
}

const createJSONFile = () => {
    var obj = {a: 123, b: "4 5 6"};
    var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(categories_w_departments));
    
    var a = document.createElement('a');
    a.href = 'data:' + data;
    a.download = 'data.json';
    a.innerHTML = 'download JSON';
    a.classList.add('btn')
    a.classList.add('btn-light')
    
    var container = document.getElementById('jsonD');
    container.appendChild(a);
}