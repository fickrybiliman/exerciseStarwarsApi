import React, { Component } from 'react';
// axios for handling api
import axios from 'axios';

// LIST RENDERING DENGAN DATA DARI API
function search (input) {
  return function (x) {
    return x.name.toLowerCase().includes(input.toLowerCase());
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      peoples : [],
      input : ''
    }
    this._searchHandler = this._searchHandler.bind(this)
  }

  componentDidMount() {
    axios.get("https://swapi.co/api/people/")
      .then((res) => {
        this.setState({ peoples : res.data.results })
      })
      .catch((err) => console.log(err))
  }    

  _searchHandler (event) {
    this.setState({ input : event.target.value })
  }

  render() {
    const {peoples, input} = this.state;
    return (
      <div>
        <h1>List Data Peoples From Starwars API (swapi.co)</h1>
        <input 
          type="text" 
          placeholder="Pencarian..."
          onChange = {this._searchHandler}
        />
        <table>
          <thead>
            <th>Nama</th>
          </thead>
          <tbody>
            {
              peoples.filter(search(input)).map((people, index) => {
                return (
                  <tr key = {index}>
                    <td>{ people.name }</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;


// ==================================
// // LIST RENDERING DENGAN DATA SENDIRI
// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       siswa : [
//         {id: 1, nama: 'Fickry Bil Iman', kelas: '7A'},
//         {id: 2, nama: 'Keanu Reeves', kelas: '8B'},
//         {id: 3, nama: 'Dian Sastro', kelas: '3C'},
//       ]
//     }
//   }

//   _handleChange = (element) => {
//     this.setState({[element.target.name]: element.target.value })
//   }

//   render() {
//     return (
//       <div>
//         <h1>List Data Siswa</h1>
        
//         <table>
//           <thead>
//             <th>ID</th>
//             <th>Nama</th>
//             <th>Kelas</th>
//           </thead>
//           <tbody>
//             {
//               this.state.siswa.map((data, index) => {
//                 return (
//                   <tr key = {index}>
//                     <td>{ data.id }</td>
//                     <td>{ data.nama }</td>
//                     <td>{ data.kelas }</td>
//                   </tr>
//                 )
//               })
//             }
//           </tbody>
//         </table>

//       </div>
//     )
//   }
// }

// export default App;

// =====================
// CONDITIONAL RENDERING
// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       tinggiBadan : 0,
//     }
//   }

//   _handleChange = (element) => {
//     this.setState({[element.target.name]: element.target.value })
//   }

//   render() {
//     return (
//       <div>
//         <h1>Test Tinggi Badan</h1>
//         <p>Masukkan Tinggi Badan</p>
//         <input 
//           onChange = { this._handleChange }
//           name = "tinggiBadan"
//           value = { this.state.tinggiBadan }
//         />
//         {/* Conditional Rendering */}
//         {
//           Number(this.state.tinggiBadan) > 170 ? 
//           (
//             <h1 style ={{ color : "blue" }} >Anda Boleh Naik Permainan Ini</h1>
//           ) :
//           (
//             <h1 style ={{ color : "red" }}>Anda Tidak Diizinkan Bermain Permainan Ini</h1>
//           )
//         }
//       </div>
//     )
//   }
// }

// export default App;


// =====================
// PENJUMLAHAN
// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       angka1: 0,
//       angka2: 0,
//       hasil: 0
//     }
//   }

//   _handleClick = () => {
//     const perhitungan = Number(this.state.angka1) + Number(this.state.angka2)
//     this.setState({hasil: perhitungan})
//   }

//   _handleChangeAngka1 = (element) => {
//     this.setState({ angka1: element.target.value })
//   }

//   _handleChangeAngka2 = (element) => {
//     this.setState({ angka2: element.target.value })
//   }

//   _handleChange = (element) => {
//     this.setState({ [element.target.name]: element.target.value })
//   }

//   render() {
//     return (
//       <div>
//         <Title/>
//         <Paragraph></Paragraph>
//         <input 
//           name = 'angka1'
//           onChange = {this._handleChange}
//           value = { this.state.angka1 } 
//         />
//         <input 
//           name = 'angka2'
//           onChange = { this._handleChange}
//           value = { this.state.angka2 }
//         />
//         <button onClick = {this._handleClick } >HITUNG</button>
//         <h1>Hasil : { this.state.hasil }</h1>
//       </div>
//     );
//   }
// }

// export default App;
