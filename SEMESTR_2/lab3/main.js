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
                    "employee_name": this.newEmployee.name,
                    "employee_age": this.newEmployee.age,
                    "employee_salary": this.newEmployee.salary,     
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
                    "employee_name": this.newEmployee.name,
                    "employee_age": this.newEmployee.age,
                    "employee_salary": this.newEmployee.salary,
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
        } 
        
    },
    mounted() {
        this.getData();
        // this.addNewData();
        
    },
})