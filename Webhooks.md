## Background

A customer comes to Proxyclick mentioning they want to create their own application branded as their own product, with their own App Store and Play Store registrations etc. You know the [Proxyclick public API](https://api.proxyclick.com/v1/docs) and system and are well suited to assist the customer with any technical requests.

The customer has the following requirements:

- Log in to the app and use the contact list to invite a visitor
- Get a push notification whenever a visitor checks-in
- Cancel a visit, where appropriate.

You help the customer suggesting the appropriate API calls to use, and it appears can use the API to resolve all the requirements but one. You discover that there are no easy ways to get alerted for visitor check-in or check-out events.

## Assignment: Design a system for sending webhooks

To fulfill the customer's request, a feature needs to be built to alert external systems of Proxyclick activity. Webhooks are ideal for this, as it allows easy, asynchronous communication to third parties without making any customer specific adjustments in the Proxyclick code base.

## Requirements

- Webhooks should have a retry policy
- Webhooks should be configurable by end-users
- Webhooks need to be secured, a receiver needs to be able to know and trust that they come from Proxyclick
- Webhooks need to be scalable, we should be able to smoothly handle a third party coming online and sending 10,000 check-ins within a couple of minutes

## Assumptions

You can assume the following assumptions already exist and you don't need to design these. Using them will (probably) be part of your result though.

- There is a portal for administrators to use, providing a UI to monitor their location and adjust their settings
- Proxyclick already tracks if a visit is checked-in or checked-out as it is part of the visitor's existing process
- The visitor registration and check-in process are complete, except that there's no way to alert third party systems

## Deliverables

Your response shouldn't focus on specific code; we are looking for a broader understanding. We would recommend you use a combination of workflows, a simple architecture diagram, data flows, some reasonings and descriptions and pseudo-code, if needed, to lay out your thinking.

The expected response is about 2 pages of text, excluding drawings/pictures. As pictures you can add anything you want, whiteboard drawings, a picture of your notebook etc, whatever allows you to express your thoughts best.
