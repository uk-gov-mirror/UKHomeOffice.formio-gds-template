# GDS Design System Templates for Formio

This project provides the templates required to implement the GDS Design System for Formio form renderer. 


## Set up and configuration

### Prerequisites


### Installation
```bash
   npm install @digitalpatterns/formio-gds-template
```


## Usage

Using vanilla formio
```javascript
import gds from '@digitalpatterns/formio-gds-template';
import {Formio} from 'formiojs';

Formio.use(gds);
```

Using react-formio

```javascript
import gds from '@digitalpatterns/formio-gds-template';
import {Formio} from "react-formio";

Formio.use(gds);
```
