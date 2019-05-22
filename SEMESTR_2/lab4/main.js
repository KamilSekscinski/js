const myApp = new Vue( {
    el: '[data-id="myApp"]',
    data: {
        employees: [],
        newEmployee: {
            name: "",
            age: "",
            salary: "",
            id: ""
        },
        editing: null,
        sortBy: '',
        lista: [],
        page: 0,

    },
    methods: {
        getData() {
            axios.get('http://kitan.pl/pb/api/v1/employees')
            .then(response => {

                console.log(`response`, response)
                this.employees = response.data
                
            })

        },
        addNewData() {
            if (this.editing) {
                axios.put("http://kitan.pl/pb/api/v1/employees/" + this.editing.id, {
                    employee_name: this.newEmployee.name,
                    employee_age: this.newEmployee.age,
                    employee_salary: this.newEmployee.salary,     
                     })
                      .then(response => { 
                        //   this.editing.name = response.data.name 
                           
                          this.newEmployee.editing = null;
                          this.getData(); 
                          console.log(response.data);
                          console.log("Edytowane!!")
                            
                    })
            } else {
            
                axios.post('http://kitan.pl/pb/api/v1/employees', {
                    employee_name: this.newEmployee.name,
                    employee_age: this.newEmployee.age,
                    employee_salary: this.newEmployee.salary,
                })
                .then((response) => {
                    console.log(response.data);
                    if (response && response.status === 200) {
                        this.getData();
                        
                        console.log(response.data)
                        console.log("Dodana nowa osoba")
                    }
                })
                .catch ((error) => {
                    console.log(error);
                });
            }
            
            this.editing = null;
            this.newEmployee.name = '';
            this.newEmployee.age = '';
            this.newEmployee.salary = '';
        },
        

        removeData(employee) {
            if (employee === this.editing) {
                this.cancel()
            }
            axios.delete("http://kitan.pl/pb/api/v1/employees/" + employee.id)
            .then(response => {
            let idx = this.employees.indexOf(employee)
            this.employees.splice(idx, 1)
            console.log('Usuniete id: ' + employee.id)
            })
        },
        edit(employee) {
            this.editing = employee;
            this.newEmployee.name = employee.employee_name;
            this.newEmployee.age = employee.employee_age;
            this.newEmployee.salary = employee.employee_salary;
            
            // this.$refs.input.focus()
        },
        cancel() {
            this.editing = null
            this.newEmployee.name = ''
            this.newEmployee.age = '';
            this.newEmployee.salary = '';            
            // this.$refs.input.focus()
        },
        
        sortData() {
            if (this.sortBy === "a-z") {
              localStorage.name = JSON.stringify(
                this.employees
                  .slice()
                  .sort((a, b) =>
                    a.employee_name
                      .toLowerCase()
                      .localeCompare(b.employee_name.toLowerCase())
                  )
              );
              this.lista = JSON.parse(localStorage.name);
              console.log(this.lista);
              return this.employees
                .slice()
                .sort((a, b) =>
                  a.employee_name
                    .toLowerCase()
                    .localeCompare(b.employee_name.toLowerCase())
                );
            } else if (this.sortBy === "z-a") {
              localStorage.name = JSON.stringify(
                this.employees
                  .slice()
                  .sort((a, b) =>
                    b.employee_name
                      .toLowerCase()
                      .localeCompare(a.employee_name.toLowerCase())
                  )
              );
              this.lista = JSON.parse(localStorage.name);
              console.log(this.lista);
              return this.employees
                .slice()
                .sort((a, b) =>
                  b.employee_name
                    .toLowerCase()
                    .localeCompare(a.employee_name.toLowerCase())
                );
            } else if (!this.sortBy) {
              localStorage.name = JSON.stringify(this.employees);
              return this.employees;
            }
          },
          nextpage() {
            this.page++;
            window.history.pushState(null, "", "?page=" + this.page);
          },
          prevpage() {
            this.page--;
            history.pushState(null, "", "?page=" + this.page);
          },
          firstpage() {
            this.page = 0;
            history.pushState(null, "", "?page=" + this.page);
          },
      
          lastpage() {
            this.page = Math.floor((this.employees.length - 1) / 10);
            history.pushState(null, "", "?page=" + this.page);
          },
    },
    created() {
        if (localStorage.name) {
          this.lista = JSON.parse(localStorage.name);
          console.log(this.lista);
        }
        let query = new URLSearchParams(location.search);
        this.page = +query.get("page"); // +null === 0
        // window.onload = window.onhashchange = () => {
        //   this.details = parseInt(location.hash.substr(1));
        // };
      },
    mounted() {
        this.getData();
        // this.addNewData();
        
    },
    computed: {
        filteredList() {
            this.employees = this.sortData();
            // return this.employees;
            return this.employees.slice(this.page * 10, this.page * 10 + 10);
          },
        isDisabledNext() {
            if (this.page >= Math.floor((this.employees.length - 1) / 10))
              return true;
            else return null;
          },
        isDisabledPrev() {
            if (this.page <= 0) return true;
            else return null;
          }

        
    },
})