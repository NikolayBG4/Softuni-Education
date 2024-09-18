function ProjectsCreation(input) {
    let ArchitectName = input[0];
    let NumberOfProjects = input[1];
    let TotalTimeNeeded = 3 * NumberOfProjects;

    console.log(`The architect ${ArchitectName} will need ${TotalTimeNeeded} hours to complete ${NumberOfProjects} project/s.`);
}


ProjectsCreation(["Alice", 5]);