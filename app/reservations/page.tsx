import React from "react";
import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import ReservationsClient from "./ReservationsClient";

export default async function ReservationPage() {
  const currentUser = await getCurrentUser();
  if (!currentUser)
    return (
      <ClientOnly>
        <EmptyState
          title="Unauthorized"
          subtitle="You must be signed in to view this page."
        />
      </ClientOnly>
    );

  const reservations = await getReservations({
    authorId: currentUser.id,
  });

  if (reservations.length === 0)
    return (
      <ClientOnly>
        <EmptyState
          title="No reservations found"
          subtitle="Looks like you have no reservations on your properties."
        />
      </ClientOnly>
    );
    
  return (
    <ClientOnly>
      <ReservationsClient
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}
