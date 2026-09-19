import * as THREE from "three";


// SCENE
const scene = new THREE.Scene();

scene.background = new THREE.Color(0xbfd7ea);


// CAMERA
const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    100
);

camera.position.set(9, 7, 12);

camera.lookAt(0, 2, 0);


// RENDERER
const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

renderer.shadowMap.enabled = true;

document.body.appendChild(renderer.domElement);


// LIGHT
const roomLight = new THREE.AmbientLight(
    0xffffff,
    2
);

scene.add(roomLight);


const sunLight = new THREE.DirectionalLight(
    0xffffff,
    3
);

sunLight.position.set(5, 10, 5);
sunLight.castShadow = true;

scene.add(sunLight);


// FLOOR
const floorGeometry = new THREE.BoxGeometry(
    12,
    0.2,
    10
);

const floorMaterial = new THREE.MeshStandardMaterial({
    color: 0xc69c6d
});

const floor = new THREE.Mesh(
    floorGeometry,
    floorMaterial
);

floor.position.y = -0.1;

floor.receiveShadow = true;

scene.add(floor);


// BACK WALL
const backWallGeometry = new THREE.BoxGeometry(
    12,
    6,
    0.2
);

const wallMaterial = new THREE.MeshStandardMaterial({
    color: 0xf1e7d8
});

const backWall = new THREE.Mesh(
    backWallGeometry,
    wallMaterial
);

backWall.position.set(
    0,
    3,
    -5
);

scene.add(backWall);


// LEFT WALL
const leftWallGeometry = new THREE.BoxGeometry(
    0.2,
    6,
    10
);

const leftWall = new THREE.Mesh(
    leftWallGeometry,
    wallMaterial
);

leftWall.position.set(
    -6,
    3,
    0
);

scene.add(leftWall);


// BED FRAME
const bedFrameGeometry = new THREE.BoxGeometry(
    4,
    0.6,
    6
);

const bedFrameMaterial = new THREE.MeshStandardMaterial({
    color: 0x6b4f3b
});

const bedFrame = new THREE.Mesh(
    bedFrameGeometry,
    bedFrameMaterial
);

bedFrame.position.set(
    -3.3,
    0.6,
    1
);

bedFrame.castShadow = true;

scene.add(bedFrame);


// MATTRESS
const mattressGeometry = new THREE.BoxGeometry(
    3.7,
    0.5,
    5.5
);

const mattressMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff
});

const mattress = new THREE.Mesh(
    mattressGeometry,
    mattressMaterial
);

mattress.position.set(
    -3.3,
    1.1,
    1
);

scene.add(mattress);


// BLANKET
const blanketGeometry = new THREE.BoxGeometry(
    3.5,
    0.15,
    3.2
);

const blanketMaterial = new THREE.MeshStandardMaterial({
    color: 0x4878a8
});

const blanket = new THREE.Mesh(
    blanketGeometry,
    blanketMaterial
);

blanket.position.set(
    -3.3,
    1.43,
    1.8
);

scene.add(blanket);


// PILLOW 1
const pillowGeometry = new THREE.BoxGeometry(
    1.4,
    0.35,
    0.8
);

const pillowMaterial = new THREE.MeshStandardMaterial({
    color: 0xf5f5f5
});

const pillow1 = new THREE.Mesh(
    pillowGeometry,
    pillowMaterial
);

pillow1.position.set(
    -4.1,
    1.5,
    -0.8
);

scene.add(pillow1);


// PILLOW 2
const pillow2 = new THREE.Mesh(
    pillowGeometry,
    pillowMaterial
);

pillow2.position.set(
    -2.5,
    1.5,
    -0.8
);

scene.add(pillow2);


// BED HEADBOARD
const headboardGeometry = new THREE.BoxGeometry(
    4.2,
    2,
    0.3
);

const headboardMaterial = new THREE.MeshStandardMaterial({
    color: 0x5a4033
});

const headboard = new THREE.Mesh(
    headboardGeometry,
    headboardMaterial
);

headboard.position.set(
    -3.3,
    1.7,
    -2
);

scene.add(headboard);


// STUDY TABLE TOP
const tableGeometry = new THREE.BoxGeometry(
    4,
    0.3,
    2
);

const tableMaterial = new THREE.MeshStandardMaterial({
    color: 0x8b5a2b
});

const table = new THREE.Mesh(
    tableGeometry,
    tableMaterial
);

table.position.set(
    3,
    2,
    -2.8
);

table.castShadow = true;

scene.add(table);


// TABLE LEGS
const tableLegGeometry = new THREE.BoxGeometry(
    0.3,
    2,
    0.3
);

const tableLeg1 = new THREE.Mesh(
    tableLegGeometry,
    tableMaterial
);

tableLeg1.position.set(
    1.3,
    1,
    -3.4
);

scene.add(tableLeg1);


const tableLeg2 = new THREE.Mesh(
    tableLegGeometry,
    tableMaterial
);

tableLeg2.position.set(
    4.7,
    1,
    -3.4
);

scene.add(tableLeg2);


const tableLeg3 = new THREE.Mesh(
    tableLegGeometry,
    tableMaterial
);

tableLeg3.position.set(
    1.3,
    1,
    -2.2
);

scene.add(tableLeg3);


const tableLeg4 = new THREE.Mesh(
    tableLegGeometry,
    tableMaterial
);

tableLeg4.position.set(
    4.7,
    1,
    -2.2
);

scene.add(tableLeg4);


// MONITOR SCREEN
const monitorGeometry = new THREE.BoxGeometry(
    2.2,
    1.4,
    0.2
);

const monitorMaterial = new THREE.MeshStandardMaterial({
    color: 0x202020
});

const monitor = new THREE.Mesh(
    monitorGeometry,
    monitorMaterial
);

monitor.position.set(
    3,
    3,
    -3
);

scene.add(monitor);


// MONITOR DISPLAY
const screenGeometry = new THREE.BoxGeometry(
    1.9,
    1.1,
    0.05
);

const screenMaterial = new THREE.MeshStandardMaterial({
    color: 0x4db8ff
});

const screen = new THREE.Mesh(
    screenGeometry,
    screenMaterial
);

screen.position.set(
    3,
    3,
    -2.88
);

scene.add(screen);


// MONITOR STAND
const standGeometry = new THREE.BoxGeometry(
    0.2,
    0.7,
    0.2
);

const stand = new THREE.Mesh(
    standGeometry,
    monitorMaterial
);

stand.position.set(
    3,
    2.25,
    -3
);

scene.add(stand);


// KEYBOARD
const keyboardGeometry = new THREE.BoxGeometry(
    1.8,
    0.1,
    0.6
);

const keyboardMaterial = new THREE.MeshStandardMaterial({
    color: 0x303030
});

const keyboard = new THREE.Mesh(
    keyboardGeometry,
    keyboardMaterial
);

keyboard.position.set(
    3,
    2.2,
    -2.2
);

scene.add(keyboard);


// CHAIR SEAT
const chairSeatGeometry = new THREE.BoxGeometry(
    1.5,
    0.3,
    1.5
);

const chairMaterial = new THREE.MeshStandardMaterial({
    color: 0x333333
});

const chairSeat = new THREE.Mesh(
    chairSeatGeometry,
    chairMaterial
);

chairSeat.position.set(
    3,
    1,
    0
);

scene.add(chairSeat);


// CHAIR BACK
const chairBackGeometry = new THREE.BoxGeometry(
    1.5,
    2,
    0.3
);

const chairBack = new THREE.Mesh(
    chairBackGeometry,
    chairMaterial
);

chairBack.position.set(
    3,
    2,
    0.6
);

scene.add(chairBack);


// CHAIR LEG
const chairLegGeometry = new THREE.CylinderGeometry(
    0.15,
    0.15,
    1,
    16
);

const chairLeg = new THREE.Mesh(
    chairLegGeometry,
    chairMaterial
);

chairLeg.position.set(
    3,
    0.4,
    0
);

scene.add(chairLeg);


// WINDOW FRAME
const windowFrameGeometry = new THREE.BoxGeometry(
    3.5,
    2.7,
    0.2
);

const windowFrameMaterial =
    new THREE.MeshStandardMaterial({
        color: 0xffffff
    });

const windowFrame = new THREE.Mesh(
    windowFrameGeometry,
    windowFrameMaterial
);

windowFrame.position.set(
    -1,
    4,
    -4.85
);

scene.add(windowFrame);


// WINDOW GLASS
const windowGeometry = new THREE.BoxGeometry(
    3,
    2.2,
    0.1
);

const windowMaterial =
    new THREE.MeshStandardMaterial({
        color: 0x82cfff
    });

const windowGlass = new THREE.Mesh(
    windowGeometry,
    windowMaterial
);

windowGlass.position.set(
    -1,
    4,
    -4.7
);

scene.add(windowGlass);


// WINDOW MIDDLE LINE
const windowLineGeometry = new THREE.BoxGeometry(
    0.1,
    2.2,
    0.15
);

const windowLine = new THREE.Mesh(
    windowLineGeometry,
    windowFrameMaterial
);

windowLine.position.set(
    -1,
    4,
    -4.6
);

scene.add(windowLine);


// WINDOW HORIZONTAL LINE
const windowLine2Geometry = new THREE.BoxGeometry(
    3,
    0.1,
    0.15
);

const windowLine2 = new THREE.Mesh(
    windowLine2Geometry,
    windowFrameMaterial
);

windowLine2.position.set(
    -1,
    4,
    -4.6
);

scene.add(windowLine2);


// RUG
const rugGeometry = new THREE.BoxGeometry(
    4,
    0.05,
    3
);

const rugMaterial = new THREE.MeshStandardMaterial({
    color: 0xd99595
});

const rug = new THREE.Mesh(
    rugGeometry,
    rugMaterial
);

rug.position.set(
    1,
    0.05,
    2
);

scene.add(rug);


// LAMP STAND
const lampStandGeometry =
    new THREE.CylinderGeometry(
        0.1,
        0.1,
        2,
        16
    );

const lampStandMaterial =
    new THREE.MeshStandardMaterial({
        color: 0x444444
    });

const lampStand = new THREE.Mesh(
    lampStandGeometry,
    lampStandMaterial
);

lampStand.position.set(
    5,
    1,
    3
);

scene.add(lampStand);


// LAMP SHADE
const lampShadeGeometry =
    new THREE.ConeGeometry(
        0.7,
        1,
        20
    );

const lampShadeMaterial =
    new THREE.MeshStandardMaterial({
        color: 0xf5c76b
    });

const lampShade = new THREE.Mesh(
    lampShadeGeometry,
    lampShadeMaterial
);

lampShade.position.set(
    5,
    2.2,
    3
);

lampShade.rotation.x = Math.PI;

scene.add(lampShade);


// SHELF
const shelfGeometry = new THREE.BoxGeometry(
    2.5,
    0.2,
    0.6
);

const shelfMaterial = new THREE.MeshStandardMaterial({
    color: 0x8b5a2b
});

const shelf = new THREE.Mesh(
    shelfGeometry,
    shelfMaterial
);

shelf.position.set(
    3.5,
    4.8,
    -4.7
);

scene.add(shelf);


// BOOK 1
const bookGeometry = new THREE.BoxGeometry(
    0.3,
    0.8,
    0.4
);

const book1Material = new THREE.MeshStandardMaterial({
    color: 0xff5555
});

const book1 = new THREE.Mesh(
    bookGeometry,
    book1Material
);

book1.position.set(
    3,
    5.3,
    -4.6
);

scene.add(book1);


// BOOK 2
const book2Material = new THREE.MeshStandardMaterial({
    color: 0x55aa55
});

const book2 = new THREE.Mesh(
    bookGeometry,
    book2Material
);

book2.position.set(
    3.4,
    5.3,
    -4.6
);

scene.add(book2);


// BOOK 3
const book3Material = new THREE.MeshStandardMaterial({
    color: 0x5555cc
});

const book3 = new THREE.Mesh(
    bookGeometry,
    book3Material
);

book3.position.set(
    3.8,
    5.3,
    -4.6
);

scene.add(book3);


// ANIMATION
function animate() {

    requestAnimationFrame(animate);

    renderer.render(
        scene,
        camera
    );
}

animate();


// FULL SCREEN RESIZE
window.addEventListener(
    "resize",
    function () {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );
    }
);