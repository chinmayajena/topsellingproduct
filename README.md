# Top Selling Product for a given category

### Use Cases:

- Expose a service which returns top selling products for a given product category.

### Assumptions/Constraints:

- Products can be in multiple categories.

- Products don't change categories once setup.

- Categories are only one level, there are no sub-categories.

- Hourly sales report is generated in a CSV format and placed in dropbox location every hour. The file name is of format SalesReport-YYYYMMDDHH.csv.

- Assume a suitable schema for sales feed.

- Only design this service and not the entire ecommerce system.

### Load characteristics:

- 100 million products.

- 1000 categories.

- 1 billion sales per month.

- 10K TPS for top-selling-products API.

### High Level Design:

- Draw a high level architecture.

- Draw a high level deployment architecture (can be combined with above).

- Draw the key data flows.

  ![High level design](./hld.png)

### Low Level Design:

- Object Model that covers the main entities and their interactions for the component processing sales feed every hour.

- Object Model that covers the main entities and their interactions for the component handling the top-selling-products service requests.

- Rest API design for the top-selling-products (cover resource, actions, URI params, HTTP codes etc).

- DB Schema details (if any).

- Technology choices.

![Low level design](./lld.png)

Additional Questions to answer:

- How do you scale the system for the specified load characteristics?

- How do you make sure the system can perform at <500 ms latency for 99th %tile of requests.

- How do you make sure the system is built for hourly update of top-products results.

- How do you debug and monitor this service for failures?

- How will you integrate with product sellers and to periodically tell them their product sales rank. Will they pull, or you push?
