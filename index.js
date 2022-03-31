const xml2js = require('xml2js')
const axios = require('axios')


//SECTION: Individual field processors making one for every destination field for consistency

const seriesProcessor = (input) => {
    //TODO: I need to hook into a database with series names to complete this
    return input
}

const titleProcessor = (input) => {
    return input
}

const descriptionProcessor = (input) => {
    //TODO: Decide whether or not to convert html wysiwig text to markdown
    return input
}

const dateProcessor = (date,time) => {
    //TODO: Combine date and ptime into single RFC3339 string (UTC)
    // YYYY-MM-DDTHH:MM:SSZ
    if (time && /[0-9]{2}:[0-9]{2}/.test(time[0])) {
        
        return new Date(`${date[0]}T${time[0]}`)
    } else {
        return new Date(`${date[0]}`)
    }
}

const durationProcessor = (input) => {
    return input[0]
}

const siteProcessor = (town, geographyContent, location, site) => {
    //TODO Process drupal site field into plainText
    //TODO Process drupal town field into placeID, adress, and coordinates
    return {
        plainText: site[0] || "",
        placeID: "",
        address: "",
        coordinates: ""
    }
}

const presentersProcessor = () => {
    return null
}

const topicsProcessor = () => {
    return null
}

const issuesProcessor = () => {
    return null
}

const agendaProcessor = (input) => {
    return input
}

const workerProcessor = (input) => {
    return input
}

const sourceProcessor = (input) => {
    return input
}

const townProcessor = (input) => {
    return input
}

const sellProcessor = (input) => {
    return input
}

const publicProcessor = (input) => {
    return input
}

const notesProcessor = (input) => {
    return input
}

const liveStatusProcessor = (input) => {
    return input
}

const completeProcessor = (input) => {
    return input
}

const instancesProcessor = (input) => {
    var instances = []
    return instances
}

//!SECTION

//SECTION 
const mutate = (nodes, callback) => {
    console.log(nodes[index])
    var processedNodes = []
    for(node of nodes) {
        processedNodes.push({
            title: node.title[0],
            description: descriptionProcessor(node.description[0]),
            date: dateProcessor(node.productionDate,node.productionTime),
            duration: durationProcessor(node.duration),
            site: siteProcessor(
                node.town[0],
                node.geographyContent[0],
                node.location[0],
                node.site || ""
            ),
            tags: {
                presenters: presentersProcessor(),
                topics: topicsProcessor(),
                issues: issuesProcessor()
            },
            agenda: [],
            worker: [],
            source: "",
            town: "",
            sell: "",
            public: "",
            notes: "",
            liveStatus: "",
            complete: "",
            instances: []
        })
    }
    callback(processedNodes)
}

var year = process.argv[2] || 1994

var month = process.argv[3] || 5

var index = process.argv[4] || 0

console.log(year,month,index)

console.log('go')

let url = `https://www.cctv.org/fullexportredo?field_pdate_value%5Bvalue%5D%5Byear%5D=${year}&field_pdate_value%5Bvalue%5D%5Bmonth%5D=${month}&timestamp=${new Date().toString()}`

axios.get(url,{
    
})
.then((res) => {
    console.log('xml loaded', res.data)
    xml2js.parseString(res.data,(err,res) => {
        console.log('xml parsed')
        if(!err) mutate(res.xml.node,(nodes) => {
            console.log("sample:")
            console.log(nodes[index])
        })
        else console.log(err)
    })
})

