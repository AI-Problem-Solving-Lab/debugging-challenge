// Each button controls the description named in its aria-controls attribute.
const detailButtons = document.querySelectorAll('.details-button');

function toggleArtistDetails(event) {
  const button = event.currentTarget;
  const description = document.getElementById(button.getAttribute('aria-controls'));
  const isExpanded = button.getAttribute('aria-expanded') === 'true';

  description.hidden = isExpanded;
  button.setAttribute('aria-expanded', String(!isExpanded));
  button.innerHTML = isExpanded
    ? 'Show Details <span aria-hidden="true">+</span>'
    : 'Hide Details <span aria-hidden="true">−</span>';
}

detailButtons.forEach(function (button) {
  button.addEventListener('click', toggleArtistDetails);
});

const ticketTypeSelect = document.getElementById('ticket-type');
const ticketQuantitySelect = document.getElementById('ticket-quantity');
const ticketSummary = document.getElementById('ticket-summary');
const ticketTotal = document.getElementById('ticket-total');

function updateTicketTotal() {
  // Select values are strings; convert them to numbers before calculating.
  const ticketPrice = Number(ticketTypeSelect.value);
  const quantity = Number(ticketQuantitySelect.value);
  const ticketType = ticketPrice === 75 ? 'General Admission' : 'VIP';
  const total = ticketPrice * quantity;

  ticketSummary.textContent = `${quantity} × ${ticketType}`;
  ticketTotal.textContent = `$${total}`;
}

ticketTypeSelect.addEventListener('change', updateTicketTotal);
ticketQuantitySelect.addEventListener('change', updateTicketTotal);
updateTicketTotal();
