import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  turn = true
  winCek = false
  baris = 0
  kolom = 0
  countPlayer1 = 0
  countPlayer2 = 0
  pesan = ""
  board = [
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"]
  ]
  Submit() {
    if (this.turn) {
      if (this.board[this.baris][this.kolom] == "*") {
        this.board[this.baris][this.kolom] = "0"
        this.turn = false
      } else {
        this.pesan = "Kolom ini sudah terisi, harap ganti kolom lain!"
      }
    } else {
      if (this.board[this.baris][this.kolom] == "*") {
        this.board[this.baris][this.kolom] = "1"
      this.turn = true
      } else {
        this.pesan = "Kolom ini sudah terisi, harap ganti kolom lain!"
      }
    }
    this.cekHorizontal()
    this.cekVertikal()
  }
  cekHorizontal() {
    this.countPlayer1 += 1
    this.countPlayer2 += 1
    for(var brs = 0; brs < 5; brs++) {
      for(var kol = 0; kol < 4; kol++) {
        if (this.board[brs][kol] == "0" && this.board[brs][kol + 1] == "0") {
          this.countPlayer1++
        }
        if(this.board[brs][kol] == "1" && this.board[brs][kol + 1] == "1") {
          this.countPlayer2++
        }
      }
    }

    console.log("HORIZONTAL")
    console.log("CounterPlayer1: " + this.countPlayer1)
    console.log("CounterPlayer2: " + this.countPlayer2)

    if(this.countPlayer1 == 4) {
      this.winCek = true
      this.pesan = "Player 1 Menang"
    } else if (this.countPlayer2 == 4) {
      this.winCek = true
      this.pesan = "Player 2 Menang"
    }
    this.countPlayer1 = 0
    this.countPlayer2 = 0
  }

  cekVertikal() {
    this.countPlayer1 += 1
    this.countPlayer2 += 1
    for(var kol = 0; kol < 5; kol++) {
      for(var brs = 0; brs < 4; brs++) {
        if (this.board[brs][kol] == "0" && this.board[brs + 1][kol] == "0") {
          this.countPlayer1++
        }
        if(this.board[brs][kol] == "1" && this.board[brs + 1][kol] == "1") {
          this.countPlayer2++
        }
      }
    }

    console.log("VERTIKAL")
    console.log("CounterPlayer1: " + this.countPlayer1)
    console.log("CounterPlayer2: " + this.countPlayer2)

    if(this.countPlayer1 == 4) {
      this.winCek = true
      this.pesan = "Player 1 Menang"
    } else if (this.countPlayer2 == 4) {
      this.winCek = true
      this.pesan = "Player 2 Menang"
    }
    this.countPlayer1 = 0
    this.countPlayer2 = 0
  }
}