import { Component, OnInit } from "@angular/core";
import { FaceSnap } from "./models/face-snap.model";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit{
   faceSnaps!: FaceSnap[];


    ngOnInit(){
        this.faceSnaps = [
            {
                title: "BELEM",
                description: "Dernier grand voilier français",
                imageUrl: "https://www.armada.org/template/img/bateau/b_81/big/adb6c62a9b0e327dfd8e0b03908809e84a71aa88.jpg",
                createdDate: new Date(),
                snaps: 0
            },
            {
                title: "thousand Sunny",
                description: "Bateau du futur roi des pirates",
                imageUrl: "https://turntoyellow.com/cdn/shop/products/thousand_sunny.jpg?v=1682263393",
                createdDate: new Date(),
                snaps: 0
            },
            {
                title: "Dragon Slayer",
                description: "Epee tueuse de dragon",
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFbUnpB1CsD9hMzW_3ojNGw6bicg3w83i9UZ_GS6FBPBlItiI7cSrxxQ4Ar0cwe17stv8&usqp=CAU",
                createdDate: new Date(),
                snaps: 0
            }
        ]
    }
}
