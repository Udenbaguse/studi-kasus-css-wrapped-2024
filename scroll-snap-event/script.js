const scroller = document.getElementById('scroller');

scroller.addEventListener('scrollsnapchange', event => {
      console.log(event.snapTargetBlock); //Menampilkan posisi snap target  pada sumbu block  (vertikal).
      console.log(event.snapTargetInline); //Menampilkan posisi snap target  pada sumbu inline  (horizontal).
        });
